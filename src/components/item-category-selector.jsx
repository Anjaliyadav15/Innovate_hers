import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ItemCategorySelector() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="electronics">Electronics</SelectItem>
        <SelectItem value="clothing">Clothing</SelectItem>
        <SelectItem value="accessories">Accessories</SelectItem>
        <SelectItem value="documents">Documents</SelectItem>
        <SelectItem value="keys">Keys</SelectItem>
        <SelectItem value="wallet">Wallet/Purse</SelectItem>
        <SelectItem value="books">Books/Notebooks</SelectItem>
        <SelectItem value="water-bottle">Water Bottle</SelectItem>
        <SelectItem value="glasses">Glasses/Sunglasses</SelectItem>
        <SelectItem value="jewelry">Jewelry</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  )
}

