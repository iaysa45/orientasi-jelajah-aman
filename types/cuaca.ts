export interface DataCuaca {
  kota: string;
  suhu: number;
  kelembaban: number;
  catatan?: string;
}

export type TingkatAQI = "Baik" | "Sedang" | "TIDAK_SEHAT" | "Berbahaya";

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
}
