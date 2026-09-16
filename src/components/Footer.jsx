export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Esteban Alarcon —{' '}
          <a href="mailto:contact@esteban-alarcon.fr" className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400">
            contact@esteban-alarcon.fr
          </a>{' '}
          ·{' '}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-zinc-400 dark:text-zinc-600">
          Démo — chaque cas d'usage est personnalisable selon votre process actuel.
        </p>
      </div>
    </footer>
  )
}
