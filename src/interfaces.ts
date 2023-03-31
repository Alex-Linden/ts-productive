export interface TodoInterface {
  id: string | number;
  title: string;
  description: string;
  priority: number;
}

export interface TodoFormInterface {
  title: string;
  description: string;
  priority: number;
}

export interface QuoteInterface {
  text: string;
  author: string;
}

export interface QuoteInterfaceAPI {
  quote: QuoteInterface;
}