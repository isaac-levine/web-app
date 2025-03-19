import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 bg-black">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; 2024 PromptLens. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
