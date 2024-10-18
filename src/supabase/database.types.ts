export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      browsingSessions: {
        Row: {
          count: number | null
          endTime: string | null
          id: string
          index: number | null
          startTime: string | null
          user_id: string
        }
        Insert: {
          count?: number | null
          endTime?: string | null
          id: string
          index?: number | null
          startTime?: string | null
          user_id: string
        }
        Update: {
          count?: number | null
          endTime?: string | null
          id?: string
          index?: number | null
          startTime?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "browsingSessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      categories: {
        Row: {
          category: string
          id: string
          vector: string | null
        }
        Insert: {
          category: string
          id: string
          vector?: string | null
        }
        Update: {
          category?: string
          id?: string
          vector?: string | null
        }
        Relationships: []
      }
      categoriesAndGlobalUrls: {
        Row: {
          category_id: string
          global_domain_id: string
          global_url_id: string
          id: string
        }
        Insert: {
          category_id: string
          global_domain_id: string
          global_url_id: string
          id: string
        }
        Update: {
          category_id?: string
          global_domain_id?: string
          global_url_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "categoriesAndGlobalUrls_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categoriesAndGlobalUrls_global_domain_id_fkey"
            columns: ["global_domain_id"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categoriesAndGlobalUrls_global_url_id_fkey"
            columns: ["global_url_id"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          }
        ]
      }
      categoriesTagsAndGlobalUrls: {
        Row: {
          category_id: string | null
          global_domain_id: string
          global_url_id: string
          id: string
          tag_id: string | null
        }
        Insert: {
          category_id?: string | null
          global_domain_id: string
          global_url_id: string
          id: string
          tag_id?: string | null
        }
        Update: {
          category_id?: string | null
          global_domain_id?: string
          global_url_id?: string
          id?: string
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categoriesTagsAndGlobalUrls_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categoriesTagsAndGlobalUrls_global_domain_id_fkey"
            columns: ["global_domain_id"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categoriesTagsAndGlobalUrls_global_url_id_fkey"
            columns: ["global_url_id"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categoriesTagsAndGlobalUrls_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      domains: {
        Row: {
          domain: string
          faviconUrl: string | null
          globalDomainId: string | null
          id: string
          lastUpdated: number | null
          user_id: string
        }
        Insert: {
          domain: string
          faviconUrl?: string | null
          globalDomainId?: string | null
          id: string
          lastUpdated?: number | null
          user_id: string
        }
        Update: {
          domain?: string
          faviconUrl?: string | null
          globalDomainId?: string | null
          id?: string
          lastUpdated?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "domains_globalDomainId_fkey"
            columns: ["globalDomainId"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "domains_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      globalDomains: {
        Row: {
          domain: string
          faviconUrl: string | null
          id: string
        }
        Insert: {
          domain: string
          faviconUrl?: string | null
          id: string
        }
        Update: {
          domain?: string
          faviconUrl?: string | null
          id?: string
        }
        Relationships: []
      }
      globalUrls: {
        Row: {
          globalDomainId: string
          id: string
          url: string
          vector: string | null
        }
        Insert: {
          globalDomainId: string
          id: string
          url: string
          vector?: string | null
        }
        Update: {
          globalDomainId?: string
          id?: string
          url?: string
          vector?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "globalUrls_globalDomainId_fkey"
            columns: ["globalDomainId"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          }
        ]
      }
      globalUrlsEmbeddedChunks: {
        Row: {
          global_domain_id: string
          global_url_id: string
          id: string
          text: string | null
          vector: string | null
        }
        Insert: {
          global_domain_id: string
          global_url_id: string
          id: string
          text?: string | null
          vector?: string | null
        }
        Update: {
          global_domain_id?: string
          global_url_id?: string
          id?: string
          text?: string | null
          vector?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "globalUrlsEmbeddedChunks_global_domain_id_fkey"
            columns: ["global_domain_id"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "globalUrlsEmbeddedChunks_global_url_id_fkey"
            columns: ["global_url_id"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          }
        ]
      }
      historyItems: {
        Row: {
          activatedTab: Json | null
          activeTabId: string | null
          activeTabWindowId: string | null
          domain_id: string | null
          globalDomain_id: string | null
          globalUrl_id: string | null
          highlightedTab: Json | null
          hoverTabId: string | null
          hoverTabWindowId: string | null
          id: string
          index: number | null
          link: Json | null
          linkTransition: string | null
          node: Json | null
          session_id: string | null
          tabFaviconUrl: string | null
          tabId: string | null
          tabStatus: string | null
          tabWindowId: string | null
          time: number | null
          title: string | null
          transitionType: string | null
          url: string | null
          url_id: string | null
          user_id: string
          windowTabsInfo: Json | null
        }
        Insert: {
          activatedTab?: Json | null
          activeTabId?: string | null
          activeTabWindowId?: string | null
          domain_id?: string | null
          globalDomain_id?: string | null
          globalUrl_id?: string | null
          highlightedTab?: Json | null
          hoverTabId?: string | null
          hoverTabWindowId?: string | null
          id: string
          index?: number | null
          link?: Json | null
          linkTransition?: string | null
          node?: Json | null
          session_id?: string | null
          tabFaviconUrl?: string | null
          tabId?: string | null
          tabStatus?: string | null
          tabWindowId?: string | null
          time?: number | null
          title?: string | null
          transitionType?: string | null
          url?: string | null
          url_id?: string | null
          user_id: string
          windowTabsInfo?: Json | null
        }
        Update: {
          activatedTab?: Json | null
          activeTabId?: string | null
          activeTabWindowId?: string | null
          domain_id?: string | null
          globalDomain_id?: string | null
          globalUrl_id?: string | null
          highlightedTab?: Json | null
          hoverTabId?: string | null
          hoverTabWindowId?: string | null
          id?: string
          index?: number | null
          link?: Json | null
          linkTransition?: string | null
          node?: Json | null
          session_id?: string | null
          tabFaviconUrl?: string | null
          tabId?: string | null
          tabStatus?: string | null
          tabWindowId?: string | null
          time?: number | null
          title?: string | null
          transitionType?: string | null
          url?: string | null
          url_id?: string | null
          user_id?: string
          windowTabsInfo?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "historyItems_domain_id_fkey"
            columns: ["domain_id"]
            isOneToOne: false
            referencedRelation: "domains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historyItems_globalDomain_id_fkey"
            columns: ["globalDomain_id"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historyItems_globalUrl_id_fkey"
            columns: ["globalUrl_id"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historyItems_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "browsingSessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historyItems_url_id_fkey"
            columns: ["url_id"]
            isOneToOne: false
            referencedRelation: "urls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historyItems_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      openAiChunkTable: {
        Row: {
          chunk: string
          completed: boolean
          createdAt: string
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiQueueTableId: string
          processing: boolean
          tokenCount: number
          url: string
          userId: string
          vector: string | null
        }
        Insert: {
          chunk: string
          completed: boolean
          createdAt?: string
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiQueueTableId: string
          processing: boolean
          tokenCount: number
          url: string
          userId: string
          vector?: string | null
        }
        Update: {
          chunk?: string
          completed?: boolean
          createdAt?: string
          globalDomainId?: string
          globalUrlId?: string
          id?: string
          openAiQueueTableId?: string
          processing?: boolean
          tokenCount?: number
          url?: string
          userId?: string
          vector?: string | null
        }
        Relationships: []
      }
      openAiChunkTableNoTokens: {
        Row: {
          chunk: string
          completed: boolean
          createdAt: string
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiQueueTableId: string
          processing: boolean
          tokenCount: number
          url: string
          userId: string
          vector: string | null
        }
        Insert: {
          chunk: string
          completed: boolean
          createdAt?: string
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiQueueTableId: string
          processing: boolean
          tokenCount: number
          url: string
          userId: string
          vector?: string | null
        }
        Update: {
          chunk?: string
          completed?: boolean
          createdAt?: string
          globalDomainId?: string
          globalUrlId?: string
          id?: string
          openAiQueueTableId?: string
          processing?: boolean
          tokenCount?: number
          url?: string
          userId?: string
          vector?: string | null
        }
        Relationships: []
      }
      openAiExtractTable: {
        Row: {
          chunk: string
          completed: boolean
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiExtract: string
          openAiObject: Json
          openAiQueueTableId: string
          processing: boolean
          url: string
          userId: string | null
          vector: string | null
        }
        Insert: {
          chunk: string
          completed: boolean
          globalDomainId: string
          globalUrlId: string
          id: string
          openAiExtract: string
          openAiObject: Json
          openAiQueueTableId: string
          processing: boolean
          url: string
          userId?: string | null
          vector?: string | null
        }
        Update: {
          chunk?: string
          completed?: boolean
          globalDomainId?: string
          globalUrlId?: string
          id?: string
          openAiExtract?: string
          openAiObject?: Json
          openAiQueueTableId?: string
          processing?: boolean
          url?: string
          userId?: string | null
          vector?: string | null
        }
        Relationships: []
      }
      openAiQueue: {
        Row: {
          completed: boolean
          completedAt: string | null
          count: number | null
          createdAt: string
          globalDomainId: string
          globalUrlId: string
          id: string
          processing: boolean
          tokenCount: number | null
          totalCycles: number | null
          urlString: string
          userId: string | null
        }
        Insert: {
          completed: boolean
          completedAt?: string | null
          count?: number | null
          createdAt?: string
          globalDomainId: string
          globalUrlId: string
          id: string
          processing: boolean
          tokenCount?: number | null
          totalCycles?: number | null
          urlString: string
          userId?: string | null
        }
        Update: {
          completed?: boolean
          completedAt?: string | null
          count?: number | null
          createdAt?: string
          globalDomainId?: string
          globalUrlId?: string
          id?: string
          processing?: boolean
          tokenCount?: number | null
          totalCycles?: number | null
          urlString?: string
          userId?: string | null
        }
        Relationships: []
      }
      openAiQueueErrored: {
        Row: {
          attempts: number | null
          completed: boolean
          completedAt: string | null
          createdAt: string
          cycleCount: number | null
          domainId: string
          id: string
          processing: boolean
          tokenCount: number | null
          totalCycles: number | null
          urlId: string
          urlString: string | null
        }
        Insert: {
          attempts?: number | null
          completed: boolean
          completedAt?: string | null
          createdAt?: string
          cycleCount?: number | null
          domainId: string
          id: string
          processing: boolean
          tokenCount?: number | null
          totalCycles?: number | null
          urlId: string
          urlString?: string | null
        }
        Update: {
          attempts?: number | null
          completed?: boolean
          completedAt?: string | null
          createdAt?: string
          cycleCount?: number | null
          domainId?: string
          id?: string
          processing?: boolean
          tokenCount?: number | null
          totalCycles?: number | null
          urlId?: string
          urlString?: string | null
        }
        Relationships: []
      }
      Post: {
        Row: {
          authorId: number | null
          content: string | null
          id: number
          published: boolean
          title: string
        }
        Insert: {
          authorId?: number | null
          content?: string | null
          id?: number
          published?: boolean
          title: string
        }
        Update: {
          authorId?: number | null
          content?: string | null
          id?: number
          published?: boolean
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Post_authorId_fkey"
            columns: ["authorId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          activeBrowsingSession: boolean | null
          alphaTester: boolean | null
          alphaTesterVersion: string | null
          avatar_url: string | null
          confirmed: boolean | null
          full_name: string | null
          lastStripePaymentDate: string | null
          openai_api_key: string | null
          openaiKey: string | null
          openaiKeyActive: boolean | null
          quarterTokensWarning: boolean | null
          stripeCustomer_id: string | null
          subscriptionCreated: boolean | null
          tokens: number | null
          under100kTokens: boolean | null
          updated_at: string | null
          user_id: string
          username: string | null
          website: string | null
        }
        Insert: {
          activeBrowsingSession?: boolean | null
          alphaTester?: boolean | null
          alphaTesterVersion?: string | null
          avatar_url?: string | null
          confirmed?: boolean | null
          full_name?: string | null
          lastStripePaymentDate?: string | null
          openai_api_key?: string | null
          openaiKey?: string | null
          openaiKeyActive?: boolean | null
          quarterTokensWarning?: boolean | null
          stripeCustomer_id?: string | null
          subscriptionCreated?: boolean | null
          tokens?: number | null
          under100kTokens?: boolean | null
          updated_at?: string | null
          user_id: string
          username?: string | null
          website?: string | null
        }
        Update: {
          activeBrowsingSession?: boolean | null
          alphaTester?: boolean | null
          alphaTesterVersion?: string | null
          avatar_url?: string | null
          confirmed?: boolean | null
          full_name?: string | null
          lastStripePaymentDate?: string | null
          openai_api_key?: string | null
          openaiKey?: string | null
          openaiKeyActive?: boolean | null
          quarterTokensWarning?: boolean | null
          stripeCustomer_id?: string | null
          subscriptionCreated?: boolean | null
          tokens?: number | null
          under100kTokens?: boolean | null
          updated_at?: string | null
          user_id?: string
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          id: string
          tag: string
          vector: string | null
        }
        Insert: {
          id: string
          tag: string
          vector?: string | null
        }
        Update: {
          id?: string
          tag?: string
          vector?: string | null
        }
        Relationships: []
      }
      tagsAndGlobalUrls: {
        Row: {
          global_domain_id: string
          global_url_id: string
          id: string
          tag_id: string
        }
        Insert: {
          global_domain_id: string
          global_url_id: string
          id: string
          tag_id: string
        }
        Update: {
          global_domain_id?: string
          global_url_id?: string
          id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tagsAndGlobalUrls_global_domain_id_fkey"
            columns: ["global_domain_id"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tagsAndGlobalUrls_global_url_id_fkey"
            columns: ["global_url_id"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tagsAndGlobalUrls_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      testVector: {
        Row: {
          created_at: string
          id: string
          vector: string | null
        }
        Insert: {
          created_at?: string
          id: string
          vector?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          vector?: string | null
        }
        Relationships: []
      }
      urls: {
        Row: {
          domain_id: string
          globalDomainId: string | null
          globalUrlId: string | null
          id: string
          lastUpdated: string | null
          url: string
          user_id: string
        }
        Insert: {
          domain_id: string
          globalDomainId?: string | null
          globalUrlId?: string | null
          id: string
          lastUpdated?: string | null
          url: string
          user_id: string
        }
        Update: {
          domain_id?: string
          globalDomainId?: string | null
          globalUrlId?: string | null
          id?: string
          lastUpdated?: string | null
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "urls_domain_id_fkey"
            columns: ["domain_id"]
            isOneToOne: false
            referencedRelation: "domains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "urls_globalDomainId_fkey"
            columns: ["globalDomainId"]
            isOneToOne: false
            referencedRelation: "globalDomains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "urls_globalUrlId_fkey"
            columns: ["globalUrlId"]
            isOneToOne: false
            referencedRelation: "globalUrls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "urls_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      User: {
        Row: {
          email: string
          id: number
          name: string | null
        }
        Insert: {
          email: string
          id?: number
          name?: string | null
        }
        Update: {
          email?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      userCategories: {
        Row: {
          category_id: string
          id: string
          user_id: string
        }
        Insert: {
          category_id: string
          id: string
          user_id: string
        }
        Update: {
          category_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "userCategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "userCategories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      userTags: {
        Row: {
          id: string
          tag_id: string
          user_id: string
        }
        Insert: {
          id: string
          tag_id: string
          user_id: string
        }
        Update: {
          id?: string
          tag_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "userTags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "userTags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          }
        ]
      }
      waitingList: {
        Row: {
          createdAt: string
          email: string
          id: string
        }
        Insert: {
          createdAt?: string
          email: string
          id: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_total_data_usage: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      clean_browsing_sessions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      copy_chunk_to_text: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      delete_all_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      rearrange_index: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reindex_historyitems: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      search_categories: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          category_id: string
          category_name: string
        }[]
      }
      search_global_domains: {
        Args: {
          p_search_text: string
        }
        Returns: {
          domain: string
          faviconUrl: string | null
          id: string
        }[]
      }
      search_global_domains2: {
        Args: {
          p_search_text: string
        }
        Returns: {
          domain: string
          faviconUrl: string | null
          id: string
        }[]
      }
      search_global_urls: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          global_url_id: string
        }[]
      }
      search_global_urls2: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          global_url_id: string
          url: string
        }[]
      }
      search_global_urls3: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          global_url_id: string
          url: string
          global_domain_id: string
          favicon_url: string
        }[]
      }
      search_tags: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          tag_id: string
          tag: string
        }[]
      }
      search_tags_and_categories: {
        Args: {
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          tag_id: string
          tag: string
          category_id: string
          category: string
        }[]
      }
      search_user_categories: {
        Args: {
          userId: string
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          category_id: string
          category: string
        }[]
      }
      search_user_domains: {
        Args: {
          p_user_id: string
          p_search_text: string
        }
        Returns: {
          domain: string
          faviconUrl: string | null
          id: string
        }[]
      }
      search_user_global_urls: {
        Args: {
          userId: string
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          global_url_id: string
          url: string
        }[]
      }
      search_user_global_urls2: {
        Args: {
          userId: string
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          global_url_id: string
          url: string
        }[]
      }
      search_user_tags: {
        Args: {
          userId: string
          query_embedding: string
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          tag_id: string
          tag: string
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never