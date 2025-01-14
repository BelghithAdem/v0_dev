// Make sure @dnd-kit/utilities is installed. Run: npm install @dnd-kit/utilities
import { useState, useEffect } from 'react'
import { OrderLine } from '@/types/sales-order'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2, GripVertical, RefreshCcw } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface DraggableOrderLineItemProps {
  line: OrderLine
  onUpdate: (updatedLine: OrderLine) => void
  onDelete: (id: string) => void
  onToggleRecurring: (id: string) => void
}

export function DraggableOrderLineItem({
  line,
  onUpdate,
  onDelete,
  onToggleRecurring
}: DraggableOrderLineItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedLine, setEditedLine] = useState(line)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: line.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  useEffect(() => {
    setEditedLine(line)
  }, [line])

  const handleInputChange = (field: keyof OrderLine, value: string | number) => {
    setEditedLine(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onUpdate(editedLine)
    setIsEditing(false)
  }

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes}>
      <TableCell>
        <Button variant="ghost" className="cursor-move" {...listeners}>
          <GripVertical className="h-4 w-4" />
        </Button>
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            value={editedLine.product_name}
            onChange={(e) => handleInputChange('product_name', e.target.value)}
            className="w-full"
          />
        ) : (
          <div>
            <div className="font-medium">{line.product_name}</div>
          </div>
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            type="number"
            value={editedLine.qty}
            onChange={(e) => handleInputChange('qty', Number(e.target.value))}
            className="w-20"
          />
        ) : (
          line.qty
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            type="number"
            value={editedLine.product_price}
            onChange={(e) => handleInputChange('product_price', Number(e.target.value))}
            className="w-24"
          />
        ) : (
          `$${line.product_price.toFixed(2)}`
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            type="number"
            value={editedLine.tax_rate}
            onChange={(e) => handleInputChange('tax_rate', Number(e.target.value))}
            className="w-20"
          />
        ) : (
          `${line.tax_rate}%`
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            type="number"
            value={editedLine.discount}
            onChange={(e) => handleInputChange('discount', Number(e.target.value))}
            className="w-20"
          />
        ) : (
          `${line.discount}%`
        )}
      </TableCell>
      <TableCell>${line.discount.toFixed(2)}</TableCell>
      <TableCell>
        <Checkbox
          checked={line.isRecurring}
          onCheckedChange={() => onToggleRecurring(line.id)}
          aria-label="Toggle recurring"
        />
      </TableCell>
      <TableCell className="text-right">
        {isEditing ? (
          <Button variant="ghost" size="sm" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(line.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}

