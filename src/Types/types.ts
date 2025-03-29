
export type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
  Fav: undefined;
  Card: undefined;
  CommandeSecteur: undefined;
  ListeDisponible: undefined;
  ClientList: undefined;
  InventaireSortie: undefined;
  Affectation: undefined;
  Livraison: undefined;
  Visite: { matricule: string; clientName: string };
  EtatFinancier: undefined;
  Factures: undefined;
  LivraisonDT: { matricule: string; clientName: string };
  Checkout: { matricule: string; clientName: string };
};
