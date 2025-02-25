export interface OptionProps {
    option: {
      id: number;
      text: string;
      isCompleted: boolean;
      isEditing: boolean;
    },
    deleteOption: (id: number) => void,
    toggleComplete: (id: number) => void,
    toggleEditing: (id: number) => void,
    editOption: (id: number, text: string) => void,
  }