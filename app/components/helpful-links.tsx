import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import links from "../data/links.json"

interface Link {
  title: string;
  url: string;
  description: string;
}

interface LinksData {
  [key: string]: Link[];
}

export function HelpfulLinks() {
  const typedLinks = links as LinksData;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-12">
      {Object.entries(typedLinks).map(([categoryName, category]) => (
        <Card key={categoryName} className="bg-gray-300 shadow-sm transition-colors">
          <CardHeader>
            <CardTitle>{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {category.map((link) => (
                <li key={link.title}>
                  <div className="flex items-start">
                    <Link 
                      target="_blank" 
                      href={link.url} 
                      className="text-primary hover:underline flex items-center"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                  <p className="text-gray-500 text-sm italic mt-1">{link.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
