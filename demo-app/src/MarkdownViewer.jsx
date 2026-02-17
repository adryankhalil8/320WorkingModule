import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownStyles = {
  container: {
    maxWidth: "900px",
    lineHeight: 1.7,
    color: "#333",
    fontSize: "0.95rem",
  },
  code: {
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
    padding: "1rem",
    borderRadius: "6px",
    overflowX: "auto",
    display: "block",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    fontFamily: "'Cascadia Code', 'Fira Code', Consolas, monospace",
  },
  inlineCode: {
    backgroundColor: "#f0f0f0",
    padding: "0.15rem 0.4rem",
    borderRadius: "3px",
    fontSize: "0.9em",
    fontFamily: "'Cascadia Code', 'Fira Code', Consolas, monospace",
    color: "#e94560",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    margin: "1rem 0",
  },
  th: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    padding: "0.5rem 0.75rem",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #ddd",
    padding: "0.5rem 0.75rem",
  },
  blockquote: {
    borderLeft: "4px solid #e94560",
    margin: "1rem 0",
    padding: "0.5rem 1rem",
    backgroundColor: "#fff5f5",
    color: "#555",
  },
  hr: {
    border: "none",
    borderTop: "2px solid #eee",
    margin: "2rem 0",
  },
};

function MarkdownViewer({ url }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <p style={{ padding: "2rem", color: "#999" }}>Loading lesson...</p>;
  if (error) return <p style={{ padding: "2rem", color: "red" }}>Error: {error}</p>;

  return (
    <div style={markdownStyles.container}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            return <pre style={markdownStyles.code}>{children}</pre>;
          },
          code({ className, children, ...props }) {
            const isBlock = /language-/.test(className || '');
            if (isBlock) {
              return <code className={className} {...props}>{children}</code>;
            }
            return <code style={markdownStyles.inlineCode} {...props}>{children}</code>;
          },
          table({ children }) {
            return <table style={markdownStyles.table}>{children}</table>;
          },
          th({ children }) {
            return <th style={markdownStyles.th}>{children}</th>;
          },
          td({ children }) {
            return <td style={markdownStyles.td}>{children}</td>;
          },
          blockquote({ children }) {
            return <blockquote style={markdownStyles.blockquote}>{children}</blockquote>;
          },
          hr() {
            return <hr style={markdownStyles.hr} />;
          },
          h1({ children }) {
            return <h1 style={{ borderBottom: "2px solid #e94560", paddingBottom: "0.3rem", marginTop: "1.5rem" }}>{children}</h1>;
          },
          h2({ children }) {
            return <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "0.2rem", marginTop: "1.5rem" }}>{children}</h2>;
          },
          a({ href, children }) {
            return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#e94560" }}>{children}</a>;
          },
          img({ src, alt }) {
            return <img src={src} alt={alt} style={{ maxWidth: "100%", borderRadius: "8px", margin: "1rem 0" }} />;
          },
          ul({ children }) {
            return <ul style={{ paddingLeft: "1.5rem", margin: "0.5rem 0", listStyleType: "disc" }}>{children}</ul>;
          },
          ol({ children }) {
            return <ol style={{ paddingLeft: "1.5rem", margin: "0.5rem 0", listStyleType: "decimal" }}>{children}</ol>;
          },
          li({ children }) {
            return <li style={{ marginBottom: "0.35rem", lineHeight: 1.7 }}>{children}</li>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
