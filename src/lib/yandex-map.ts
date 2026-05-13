export type YMapInstance = {
  geoObjects: {
    add: (object: unknown) => void;
  };
  destroy: () => void;
};

export type YMapsApi = {
  ready: (callback: () => void) => void;
  Map: new (container: HTMLElement, options: Record<string, unknown>) => YMapInstance;
  Placemark: new (
    coordinates: readonly [number, number],
    properties: Record<string, unknown>,
    options: Record<string, unknown>
  ) => unknown;
};

declare global {
  interface Window {
    ymaps?: YMapsApi;
  }
}

let mapsPromise: Promise<YMapsApi> | null = null;

export function loadYandexMaps(apiKey: string) {
  if (window.ymaps) {
    return Promise.resolve(window.ymaps);
  }

  if (!mapsPromise) {
    mapsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${encodeURIComponent(apiKey)}&lang=ru_RU`;
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          resolve(window.ymaps);
        } else {
          reject(new Error("Yandex Maps API did not initialize"));
        }
      };
      script.onerror = () => reject(new Error("Failed to load Yandex Maps API"));
      document.head.appendChild(script);
    });
  }

  return mapsPromise;
}
