import "./App.css";

const images = [
  { id: "cover", title: "Couverture", src: "/assets/1.png" },
  { id: "toc", title: "Table des matières", src: "/assets/2.png" },
  { id: "presentation", title: "Présentation", src: "/assets/3.png" },
  { id: "introduction", title: "Introduction", src: "/assets/4.png" },
  { id: "projets", title: "Projets", src: "/assets/5.png" },
  { id: "conclusion", title: "Conclusion", src: "/assets/6.png" },
];

export default function App() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px" }}>
      {images.map((it) => (
        <section
          key={it.id}
          id={it.id}
          style={{ marginBottom: "56px" }}
        >
          <h2
            style={{
              marginBottom: "16px",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            {it.title}
          </h2>

          <img
            src={it.src}
            alt={it.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          />
        </section>
      ))}
    </main>
  );
}
