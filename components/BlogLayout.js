import { parseISO, format } from 'date-fns';
import Layout from '../components/layout';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <article className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Saurish Srivastava'}
              
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
      </article>
    </Layout>
  );
}
