import Head from 'next/head'
import Footer from '../components/footer'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function MasksWork() {
  return (
    <Layout maskswork>
      <Head>
        <title>{siteTitle}: Masks Work</title>
      </Head>
      <header className={utilStyles.header}>
        <h2 className={utilStyles.heading2Xl}>Masks Work</h2>
        <h2 className={utilStyles.headingLg}>Please Wear Them!</h2>
      </header>
      <section className={utilStyles.headingMd}>
        <p>
          Masks <b>work</b> and shouldn't be a political question, but rather a moral one. If you would rather have higher chances of being exposed to the coronavirus pandemic,
          be my guest. But please, be a <b>good human</b> and lower the chances for transmission to others. I will try to update these.
          <br /><br />
          <b>Update</b>: I ended up not updating this because I've now realized that this information has been broadcasted on a national level. There are still people who wish not to follow
          guidelines, but that is an individual choice; one that definitely was not influenced by science, but nonetheless, an individual choice. I will keep this here for anyone to go through
          some interesting papers.
          <br /><br />
          <hr /><br />
        </p>
        <p>
          <strong>5.</strong> August 07: <a href="https://advances.sciencemag.org/content/advances/early/2020/08/07/sciadv.abd3083.full.pdf">Duke University</a>
          {' '}- explains the difference in 14 different types of masks (bandanas and fleeces suck!) also shows that the "droplet transmission" 
          through face masks is <u>significantly</u> lower than the "droplet transmission" through no mask. please read
          if you don't know what type of mask to wear/buy or if you don't quite understand why masks work.
        </p>
        <a href="https://advances.sciencemag.org/content/advances/early/2020/08/07/sciadv.abd3083.full.pdf">
            <img className={utilStyles.imgC} src="/images/masks5.jpg" alt="The results of the Duke study"></img>
        </a>
        <p>
          <strong>4.</strong> June 16: <a href="https://www.healthaffairs.org/doi/pdf/10.1377/hlthaff.2020.00818">Health Affairs</a>
          {' '}- a study of social distancing and mask wearing regulations in the US. social distancing and wearing a face mask <u><strong>-{'>'}</strong></u>
          {' '}led to a decline in the cases of covid-19 in the US writ large. not wearing a mask and not social distancing <u><strong>-{'>'}</strong></u>
          {' '}more cases of covid-19.
        </p>
        <a href="https://www.healthaffairs.org/doi/pdf/10.1377/hlthaff.2020.00818">
            <img className={utilStyles.imgC} src="/images/masks4.jpg" alt="The results of Health Affairs' study"></img>
        </a>
        <p>
          <strong>3.</strong> June 01: <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31142-9/fulltext">The Lancet</a>
          {' '}- a study of social distancing, mask wearing, and eye protection. social distancing <u><strong>-{'>'}</strong></u> less transmission of a virus
          ([PaOR] 0.18, 95% CI 0.09 to 0.38; [RD] −10.2%, 95% CI −11.5 to −7.5) with protection increasing w/ distance increasing. wearing a face mask
          {' '}<u><strong>-{'>'}</strong></u> large reduction of risk of infection ([PaOR] 0.15, 95% CI 0.07 to 0.34, [RD] −14.3%, −15.9 to -10.7)
        </p>
        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31142-9/fulltext">
            <img className={utilStyles.imgC} src="/images/masks3.jpg" alt="The results of The Lancet's study"></img>
        </a>
        <p>
          <strong>2.</strong> April 24: <a href="https://pubs.acs.org/doi/10.1021/acsnano.0c03252">The American Chemical Society</a>
          {' '}- measure of the filtration efficiencies of different types of masks. cotton, natural silk, and chiffon {' '}
          <u><strong>-{'>'}</strong></u> good protection (+50%). opening/gaps in masks <u><strong>-{'>'}</strong></u> degrades
          performance. please read if you don't know what type of mask to wear/buy or if you don't quite understand why masks work.
        </p>
        <a href="https://pubs.acs.org/doi/10.1021/acsnano.0c03252">
            <img className={utilStyles.imgC} src="/images/masks2.jpg" alt="The results of The American Chemical Society's study"></img>
        </a>
        <p>
          <strong>1.</strong> April 03: <a href="https://www.nature.com/articles/s41591-020-0843-2">Nature Medicine</a>
          {' '}- a study of respiratory droplets with correlation to mask wearing. without masks <u><strong>-{'>'}</strong></u> detected coronavirus in 
          30% and 40% of respiratory droplets and aerosols (respectively). with a mask <u><strong>-{'>'}</strong></u> detected coronavirus in 0% of
          respiratory droplets and aerosols.<br /><br />
          <a href="https://www.nature.com/articles/s41591-020-0843-2">
            <img className={utilStyles.imgC} src="/images/masks1.jpg" alt="The results of Nature Medicine's study"></img>
          </a>
          <br /><strong><center>Please wear a mask and stay safe!</center></strong>
        </p>  
      </section>
      <br />
      <Footer />
    </Layout>
  )
}