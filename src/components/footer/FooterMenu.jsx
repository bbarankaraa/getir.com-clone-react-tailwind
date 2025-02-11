
export default function FooterMenu({ title, items }) {


  return (
    <section>
      <nav className="grid md:gap-y-4 gap-y-2">
        <h6 className="text-lg text-brand-color">{title}</h6>
        <nav>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-sm hover:text-brand-color transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
}
