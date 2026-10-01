import { Reveal } from './Reveal';
import { OrnamentalDivider } from './Decorative';

export default function InvitationMessage() {
  return (
    <section className="relative py-8 sm:py-10 px-6">
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <OrnamentalDivider className="mb-5" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed">
            With joyful hearts, we invite you to join us as we celebrate our
            First Day celebration and the beginning of our beautiful journey together.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <OrnamentalDivider className="mt-5" />
        </Reveal>
      </div>
    </section>
  );
}
