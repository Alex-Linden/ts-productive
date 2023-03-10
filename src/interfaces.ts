export interface TodoInterface {
  id: string;
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