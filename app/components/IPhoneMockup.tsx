import Image from 'next/image'

export default function IPhoneMockup() {
  return (
    <Image
      src="/assets/iphone-mockup.png"
      alt="Mismo iOS app"
      fill
      quality={100}
      priority
      style={{ objectFit: 'contain' }}
    />
  )
}
