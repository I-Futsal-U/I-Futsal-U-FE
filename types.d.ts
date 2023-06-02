interface Props {
  children: ReactNode;
}

interface Window {
  kakao: any;
}

interface PlaceSearch {
  data: { [key: string]: string }[];
  status: string | null;
  pagination: number;
}
