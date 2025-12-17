import type { FilterStatus } from "@/types/FilterStatus"
import { Trash2 } from "lucide-react-native"
import { styles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"
import { StatusIcon } from "../StatusIcons"

type ItemData = {
  status: FilterStatus
  description: string
}

type Props = {
  data: ItemData
  onStatus: () => void
  onRemove: () => void
}
export function Item({ data, onStatus, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}> 
        <Trash2 size={18} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
}