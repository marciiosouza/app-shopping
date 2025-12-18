import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PEDDING, FilterStatus.DONE];

const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "01 - Caixa de Leite",
  },
  {
    id: "2",
    status: FilterStatus.PEDDING,
    description: "04 - Pacotes de macarrão",
  },
  {
    id: "3",
    status: FilterStatus.PEDDING,
    description: "01 - litro de óleo de soja ",
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => {
                console.log("Mudar status");
              }}
              onRemove={() => {
                console.log("Remover item");
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item encontrado.</Text>}
        ></FlatList>
      </View>
    </View>
  );
}
