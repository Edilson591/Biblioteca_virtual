export interface Books {
  id: string;
  categoria: string;
  descricao: string;
  autor: string | null;
  disponibilidade: boolean;
  titulo: string;
  img: string;
  create_at: Date | null;
  update_at: Date | null;
}
