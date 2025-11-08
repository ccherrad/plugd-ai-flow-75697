import { FileText, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See What We're Building
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clean, intuitive interface for managing documents with AI-powered automation under the hood.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Mock Header */}
            <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Invoices</h3>
                  <p className="text-sm text-muted-foreground">Manage your invoice documents</p>
                </div>
              </div>
              <Button className="bg-cta hover:bg-cta/90 text-cta-foreground">
                <Upload className="mr-2 h-4 w-4" />
                Upload Invoices
              </Button>
            </div>

            {/* Mock Content */}
            <div className="p-6 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  disabled
                />
              </div>

              {/* Table Preview */}
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">#</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Invoice Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-4 text-sm text-muted-foreground">001</td>
                      <td className="px-4 py-4 text-sm font-medium text-foreground">INV-2024-001.pdf</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          Processed
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">$2,450.00</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-4 text-sm text-muted-foreground">002</td>
                      <td className="px-4 py-4 text-sm font-medium text-foreground">INV-2024-002.pdf</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">$1,200.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">Clean interface. Powerful automation. Zero manual data entry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;