export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-white">Abimanyu Satyadji</span> — All
        rights reserved.
      </p>
    </footer>
  );
}
