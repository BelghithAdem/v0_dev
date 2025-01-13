'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SalesOrder } from "@/types/sales-order"
import { SaveAll, FileText, Calendar, MoreVertical, Eye } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"

interface OrderTemplatesProps {
  onLoadTemplate: (template: SalesOrder) => void
  onPreviewTemplate: (template: SalesOrder) => void
  currentOrder: Partial<SalesOrder>
  templates: Template[]
  setTemplates: (templates: Template[]) => void
}

interface Template {
  id: string
  name: string
  description: string
  createdAt: Date
  order: SalesOrder
  tags?: string[]
}

export function OrderTemplates({ onLoadTemplate, onPreviewTemplate, currentOrder, templates, setTemplates }: OrderTemplatesProps) {
  const [saveTemplateOpen, setSaveTemplateOpen] = useState(false)
  const [templateName, setTemplateName] = useState('')
  const [templateDescription, setTemplateDescription] = useState('')

  const handleSaveTemplate = () => {
    const newTemplate: Template = {
      id: Math.random().toString(),
      name: templateName,
      description: templateDescription,
      createdAt: new Date(),
      order: {
        ...currentOrder,
        id: Math.random().toString(),
        orderNumber: `TEMPLATE-${Math.floor(Math.random() * 1000)}`,
        status: 'draft',
      } as SalesOrder
    }
    setTemplates([...templates, newTemplate])
    setSaveTemplateOpen(false)
    setTemplateName('')
    setTemplateDescription('')
  }

  const handleDeleteTemplate = (templateId: string) => {
    setTemplates(templates.filter(t => t.id !== templateId))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Order Templates</h2>
        <Button onClick={() => setSaveTemplateOpen(true)}>
          <SaveAll className="h-4 w-4 mr-2" />
          Save as Template
        </Button>
      </div>

      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{template.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  {template.tags && (
                    <div className="flex gap-2 mt-2">
                      {template.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onLoadTemplate(template.order)}>
                      Load Template
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onPreviewTemplate(template.order)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteTemplate(template.id)}>
                      Delete Template
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(template.createdAt, 'MMM d, yyyy')}
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  {template.order.orderLines.length} items
                </div>
                <div>
                  Total: ${template.order.total.toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={saveTemplateOpen} onOpenChange={setSaveTemplateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save as Template</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Template Name</Label>
              <Input
                id="name"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="Enter template name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={templateDescription}
                onChange={(e) => setTemplateDescription(e.target.value)}
                placeholder="Enter template description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSaveTemplateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveTemplate} disabled={!templateName}>
              Save Template
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

