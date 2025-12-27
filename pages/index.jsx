import Head from "next/head";
import styles from "../styles/Diagram.module.css";

const layers = [
  {
    title: "Internet Backbone",
    subtitle: "Tier 1 / Tier 2 Providers & IXPs",
    items: [
      "Tier 1 Provider A",
      "Tier 1 Provider B",
      "Internet Exchange Point"
    ]
  },
  {
    title: "ISP Core Network",
    subtitle: "Core Routers, Firewalls, Data Centers",
    items: [
      "Peering Router Cluster",
      "Core Switching Fabric",
      "Firewall Pair",
      "Primary Data Center (DNS, Email, AAA)",
      "Secondary Data Center (Storage, Monitoring)"
    ]
  },
  {
    title: "Regional Distribution",
    subtitle: "PoPs & Metro Aggregation",
    items: [
      "Regional PoP - North",
      "Regional PoP - Central",
      "Regional PoP - South",
      "Metro Edge Router Ring"
    ]
  },
  {
    title: "Access Networks",
    subtitle: "FTTH, Fixed Wireless, Satellite",
    items: [
      "Fiber OLT Shelf",
      "Fixed Wireless Tower (LTE/5G)",
      "Rural Microwave Backhaul",
      "Satellite Gateway Hub"
    ]
  },
  {
    title: "Customer Premises",
    subtitle: "Residential & Enterprise CPE",
    items: [
      "Residential ONT + Wi-Fi Router",
      "SMB Managed Router",
      "Enterprise Edge Firewall",
      "IoT Gateway / Smart Home"
    ]
  }
];

const connections = [
  { from: 0, to: 1, label: "Dual 400G Fiber" },
  { from: 1, to: 2, label: "100G MPLS Ring" },
  { from: 2, to: 3, label: "10G Aggregation" },
  { from: 3, to: 4, label: "Last-Mile Access" }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ISP Network Architecture Diagram</title>
        <meta
          name="description"
          content="Layered visualization of a modern ISP network including backbone, core, distribution, access, and customer domains."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>ISP Network Architecture</h1>
          <p>
            Visual reference for a resilient ISP design that spans upstream
            connectivity, core services, regional distribution, multi-technology
            access, and customer edge equipment.
          </p>
        </header>

        <section className={styles.diagram}>
          <div className={styles.layerColumn}>
            {layers.map((layer, index) => (
              <article key={layer.title} className={styles.layer}>
                <div className={styles.layerHeader}>
                  <h2>{layer.title}</h2>
                  <span>{layer.subtitle}</span>
                </div>
                <ul>
                  {layer.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {index !== layers.length - 1 && (
                  <div className={styles.connector}>
                    <span className={styles.connectorLabel}>
                      {
                        connections.find(
                          (connection) => connection.from === index
                        )?.label
                      }
                    </span>
                    <span className={styles.connectorArrow} aria-hidden>
                      ↓
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          <aside className={styles.legend}>
            <h3>Legend</h3>
            <ul>
              <li>
                <span className={styles.legendBadge} data-type="cloud">
                  Cloud
                </span>
                Upstream providers & internet exchanges
              </li>
              <li>
                <span className={styles.legendBadge} data-type="core">
                  Core
                </span>
                ISP peering, data centers, security
              </li>
              <li>
                <span className={styles.legendBadge} data-type="distribution">
                  PoP
                </span>
                Regional aggregation & metro backhaul
              </li>
              <li>
                <span className={styles.legendBadge} data-type="access">
                  Access
                </span>
                Fiber, wireless, and satellite delivery
              </li>
              <li>
                <span className={styles.legendBadge} data-type="customer">
                  CPE
                </span>
                Customer premises equipment
              </li>
            </ul>
          </aside>
        </section>

        <footer className={styles.footer}>
          <p>
            Built for planning redundancy, capacity, and service segmentation in
            modern broadband networks.
          </p>
        </footer>
      </main>
    </>
  );
}
