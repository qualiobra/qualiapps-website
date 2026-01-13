export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  name: string
  description: string
  type: 'website' | 'mobile' | 'fintech' | 'system'
  image?: string
  tags: string[]
  featured?: boolean
  status: 'completed' | 'active' | 'development'
  url?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image?: string
  social?: {
    linkedin?: string
    github?: string
    instagram?: string
  }
}

export interface NavLink {
  name: string
  to: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}
