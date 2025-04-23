
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { FirecrawlService } from "@/utils/FirecrawlService";

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
  error?: string;
}

const CrawlForm = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CrawlResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    const crawlResult = await FirecrawlService.crawlWebsite(url);

    setResult(crawlResult);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 mb-16">
      <Card className="p-8">
        <h3 className="font-bold text-2xl mb-4 text-blue-700">Website Scraper</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="url"
            value={url}
            required
            placeholder="https://techkhwa.com/"
            onChange={e => setUrl(e.target.value)}
            className="w-full"
          />
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "Scraping..." : "Scrape Website"}
          </Button>
        </form>
        {result && (
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-2">Result</h4>
            {result.success && result.data ? (
              <pre className="bg-gray-100 dark:bg-gray-900 rounded p-4 overflow-auto text-xs max-h-60">{JSON.stringify(result.data, null, 2)}</pre>
            ) : (
              <p className="text-red-600">{result.error || "An error occurred."}</p>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default CrawlForm;
