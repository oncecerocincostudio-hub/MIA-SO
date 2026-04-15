import { KPI } from "./types"

export default function KPICard({
  title,
  value,
  change,
  icon: Icon,
}: KPI) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span>{title}</span>
        <Icon size={20} />
      </div>

      <div style={styles.value}>{value}</div>

      {change !== undefined && (
        <div
          style={{
            ...styles.change,
            color: change >= 0 ? "green" : "red",
          }}
        >
          {change >= 0 ? "+" : ""}
          {change}%
        </div>
      )}
    </div>
  )
}

const styles = {
  card: {
    padding: 16,
    borderRadius: 12,
    border: "1px solid #eee",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
  },
  change: {
    marginTop: 8,
  },
}
