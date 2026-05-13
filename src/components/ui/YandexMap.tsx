import { useEffect, useRef, useState } from "react";
import { loadYandexMaps, type YMapInstance } from "../../lib/yandex-map";

type YandexMapProps = {
  coordinates: readonly [number, number];
  title: string;
  address: string;
};

export function YandexMap({ coordinates, title, address }: YandexMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<YMapInstance | null>(null);
  const [error, setError] = useState(false);
  const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY as string | undefined;

  useEffect(() => {
    let cancelled = false;

    if (!apiKey || !containerRef.current) {
      setError(true);
      return;
    }

    loadYandexMaps(apiKey)
      .then((ymaps) => {
        ymaps.ready(() => {
          if (cancelled || !containerRef.current) {
            return;
          }

          const map = new ymaps.Map(containerRef.current, {
            center: coordinates,
            zoom: 15,
            controls: ["zoomControl"],
          });

          const placemark = new ymaps.Placemark(
            coordinates,
            {
              balloonContentHeader: title,
              balloonContentBody: address,
              hintContent: title,
            },
            {
              preset: "islands#blackFactoryIcon",
            }
          );

          map.geoObjects.add(placemark);
          mapRef.current = map;
        });
      })
      .catch(() => setError(true));

    return () => {
      cancelled = true;
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, [address, apiKey, coordinates, title]);

  if (error) {
    return (
      <div className="grid min-h-[420px] place-items-center border border-neutral-800 bg-neutral-950 p-6 text-center text-white">
        <div>
          <p className="text-2xl font-black uppercase">44.77555, 37.7024</p>
          <p className="mt-3 max-w-md text-neutral-400">{address}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-[420px] w-full overflow-hidden rounded-[16px] border border-black/10 bg-white grayscale"
    />
  );
}
