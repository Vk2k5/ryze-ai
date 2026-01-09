export default function Footer() {
    return (
      <footer
        style={{
          padding: '20px',
          borderTop: '1px solid #e5e7eb',
          marginTop: '60px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#6b7280',
        }}
      >
        © {new Date().getFullYear()} Ryze AI
      </footer>
    )
  }
  