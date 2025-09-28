// 通用类型
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

// API 响应类型
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// 分页类型
export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// 主题类型
export type Theme = 'light' | 'dark' | 'system'

// 组件 Props 基础类型
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// 表单类型
export interface FormFieldProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
}

// 按钮类型
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
