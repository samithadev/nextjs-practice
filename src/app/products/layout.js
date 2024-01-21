export default function ProductsLayout({ children }) {
    return (
      <div>
        <div className="prow">
            Product Header
        </div>
        {children}

        <div className="prow">
            Product Footer
        </div>
      </div>
    );
}