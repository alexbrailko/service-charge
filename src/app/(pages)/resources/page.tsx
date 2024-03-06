import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export default function Resources() {
  const title = 'Valuable Resources and Tools for Real Estate Investors';

  return (
    <div className="container">
      <Breadcrumbs title={title} />
      <div className="single">
        <h1>{title}</h1>
        <p>
          If you’re selling or renting out your home, you’ll need an Energy
          Performance Certificate (EPC) for your property.
        </p>
        <p>
          These reports were introduced by the government in 2007 to encourage
          people to make their homes more energy efficient. This is because in
          the UK, around 22% of carbon emissions come from our homes, from
          things like heating, lighting, and running household appliances.
        </p>
        <p>
          A home that scores highly on energy efficiency will lead to cheaper
          bills. So it’s a good idea to check a property’s EPC when you’re
          searching for a home on Rightmove. You can find the EPC under the
          property description details, or ask the estate agent to provide you
          with a copy. Here’s everything you need to know about EPCs:
        </p>
        <h2>What is an EPC report?</h2>
        <p>
          An EPC is a report drawn up by an accredited domestic energy assessor.
          They’ll visit your home to check how much energy it takes to power the
          property and keep it warm.
        </p>
        <h3>What does an Energy Performance Certificate check involve?</h3>
        <p>
          Potential sources of draughts, or where heat can escape, will be
          assessed during this visit. This includes requirements like checking
          how well insulated your floors and walls are, if you have double
          or triple-glazed windows, and how much heat is retained in your home.
        </p>
        <blockquote>
          Your home’s energy rating looks like the sticker you might find on a
          fridge or a washing machine, and ranges from A (most efficient) to G
          (least efficient).
        </blockquote>
        <h3>How can I check what the energy rating is for my property?</h3>
        <ul>
          <li>
            If you’re not sure what your home’s current EPC rating is, don’t
            worry, it’s easy to find. The government has set up a register of
            EPC certificates, so if it has been assessed, you can look up the
            rating online. If you live in England, Wales, or Northern Ireland
            you can search for your EPC here. If you live in Scotland, you can
            check here.
          </li>
          <li>
            If you’re not sure what your home’s current EPC rating is, don’t
            worry, it’s easy to find. The government has set up a register of
            EPC certificates, so if it has been assessed, you can look up the
            rating online. If you live in England, Wales, or Northern Ireland
            you can search for your EPC here. If you live in Scotland, you can
            check here.
          </li>
        </ul>
        <h3>How can I check what the energy rating is for my property?</h3>
        <ol>
          <li>
            If you’re not sure what your home’s current EPC rating is, don’t
            worry, it’s easy to find. The government has set up a register of
            EPC certificates, so if it has been assessed, you can look up the
            rating online. If you live in England, Wales, or Northern Ireland
            you can search for your EPC here. If you live in Scotland, you can
            check here.
          </li>
        </ol>
        <p>
          Go to <a href="">Link</a>
        </p>
      </div>
    </div>
  );
}
