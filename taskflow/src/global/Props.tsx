interface AuthContextType {
  taskList: Array<PropCard>;
  onOpen: void;
  handleEdit: Function;
  handleDelete: Function;
}

type PropCard = {
  description: string;
  flag: PropFlags;
  item: number;
  task: string;
};

type PropFlags = "pendente" | "feito";
