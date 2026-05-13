import Image from 'next/image'

export default function IPhoneMockup() {
  return (
    <Image
      src="/assets/iphone-mockup.png"
      alt="Mismo iOS app"
      width={297}
      height={613}
      quality={100}
      priority
      className="flex-shrink-0"
    />
  )
}
