import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function HelpfulLinks() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Understanding Addiction</CardTitle>
          <CardDescription>Learn about the disease of addiction; its causes, and how it affects the brain and body.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <Link target="__blank" href="https://www.yourbrainonporn.com/relevant-research-and-articles-about-the-studies/brain-studies-on-porn-users-sex-addicts/" className="text-primary hover:underline">
                Brain Studies on Porn Users & Sex Addicts
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:underline">
                Link 2
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Getting Help</CardTitle>
          <CardDescription>Your path to recovery starts here: Explore treatment options, find support groups, and access crisis resources.</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="space-y-2">
            <li>
              <Link href="#" className="text-primary hover:underline">
                Link 1
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:underline">
                Link 2
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>For Families & Friends</CardTitle>
          <CardDescription>Supporting a loved one through addiction: Learn how to help without enabling, set boundaries, and cope with the challenges.</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="space-y-2">
            <li>
              <Link href="#" className="text-primary hover:underline">
                Link 1
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:underline">
                Link 2
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

