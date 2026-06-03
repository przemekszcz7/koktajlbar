export interface Drink {
  id: number;
  name: string;
  image: string;
  description: string;
  shortDesc: string;
  category: string;
  temp?: string;
  notes?: string;
}

export const DRINKS_DATA: Drink[] = [
  {
    id: 1,
    name: "Rabarbarowe Daiquiri",
    image: "https://i.ibb.co/FL31v3Wb/704882375-841056259060947-2874405486241573119-n.jpg",
    shortDesc: "Kwaśny rabarbar, dymna bańka i spektakl zmysłów",
    description: "Rabarbarowe Daiquiri, ale nie takie, jakie znacie. Najpierw pojawia się dymna bańka. Potem pierwszy zachwyt. Dopiero później pierwszy łyk. Kwaśny rabarbar, świeżość i lekka słodycz zamknięte w kieliszku, który bardziej przypomina mały spektakl niż zwykłego drinka.",
    category: "Signature Cocktail",
    temp: "Schłodzony z dymną mgłą",
    notes: "Ręcznie robiony syrop rabarbarowy, rum superior, świeża limonka, efekt dymu zapachowego."
  },
  {
    id: 2,
    name: "Herbatka z Soplicą Wiśniową",
    image: "https://i.ibb.co/fYzLmC0w/701696865-836031986230041-5568381791447541234-n.jpg",
    shortDesc: "Gorąca, aromatyczna, rozgrzewająca klasyka",
    description: "Herbatka z Soplicą Wiśniową już czeka za barem. Gorąca, aromatyczna i taka, po której człowiek od razu wraca do życia.",
    category: "Ciepły Rozgrzewacz",
    temp: "Gorący napar",
    notes: "Aromatyczna czarna herbata, Soplica Wiśniowa, goździki, plaster pomarańczy, syrop korzenny."
  },
  {
    id: 3,
    name: "Zestaw Espresso (Tonic & Martini)",
    image: "https://i.ibb.co/gLD7x1tm/692079474-830661433433763-6202238885192780217-n.jpg",
    shortDesc: "Pobudzające orzeźwienie nad jeziorem lub kremowy charakter",
    description: "Espresso Tonic czy Espresso Martini? Dziś nie oceniamy wyborów. Dziś po prostu korzystamy z pogody. Jeśli potrzebujesz czegoś lekkiego, zimnego i ultra orzeźwiającego, Espresso Tonic czeka na ogródku z widokiem na jezioro. Jeśli niedziela zasługuje u Ciebie na trochę więcej charakteru, kremowe Espresso Martini zrobi robotę od pierwszego łyka.",
    category: "Kofeinowa Rozkosz",
    temp: "Z lodem / Wstrząśnięte",
    notes: "Świeżo parzony shot espresso z rzemieślniczych ziaren, tonic premium lub likier kawowy i czysta wódka."
  }
];

export const OPENING_HOURS = [
  { day: "Poniedziałek", hours: "11:00 – 00:00", weekend: false },
  { day: "Wtorek", hours: "11:00 – 00:00", weekend: false },
  { day: "Środa", hours: "11:00 – 00:00", weekend: false },
  { day: "Czwartek", hours: "11:00 – 00:00", weekend: false },
  { day: "Piątek", hours: "11:00 – 02:00", weekend: true, highlightText: "Długie Polskie Noce!" },
  { day: "Sobota", hours: "11:00 – 02:00", weekend: true, highlightText: "Weekendowe Szaleństwo!" },
  { day: "Niedziela", hours: "11:00 – 00:00", weekend: false }
];

export const BAR_INFO = {
  name: "BAR & SHOT / Koktajl Bar",
  address: "Odrodzonego Wojska Polskiego, Sława 67-410",
  phone: "500 692 634",
  instagram: "https://www.instagram.com/koktajl_bar_slawa?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExZHRFUUZ5UkJOeUNvNDF6WHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4lRYoKZ5xgVkEyWtNgn2-b15-1EtEDKfGE8tQbGy6I2PKVvCBnb2PFBUrEZA_aem_f5E-Bqivz1WOoI6orEwaUw",
  facebook: "https://www.facebook.com/profile.php?id=100094697407832"
};
