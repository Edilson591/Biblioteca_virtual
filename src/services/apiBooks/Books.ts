export interface Books {
  id: string;
  categoria: string | undefined;
  descricao: string | undefined;
  autor: string | null | undefined;
  disponibilidade: boolean;
  titulo: string |undefined;
  img?: string | undefined;
  create_at: Date | null;
  update_at: Date | null;
}
