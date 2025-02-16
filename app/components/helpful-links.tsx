import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import links from "./links.json"

interface Link {
  title: string;
  url: string;
}

interface LinksData {
  [key: string]: Link[];
}

export function HelpfulLinks() {
  const typedLinks = links as LinksData;
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(typedLinks).map(([categoryName, category]) => (
        <Card key={categoryName} className="bg-gray-300 shadow-sm transition-colors">
          <CardHeader>
            <CardTitle>{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.map((link) => (
                <li key={link.title}>
                  <Link target="_blank" href={link.url} className="text-primary hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

