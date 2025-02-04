import {Button} from '@/components/ui/button'
import {AlignJustify, House, DollarSign, Bolt, Compass, PencilLine} from 'lucide-react'
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return(
        <div className='w-full pr-3 sm:hidden py-3 bg-white sticky top-0 border-b-[1px]'>
            <nav className='flex justify-between' >
                <Image
                className='ml-3'
                src='/logo.svg'
                width={150}
                height={150}
                alt='Logo'
                >

                </Image>
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="ghost" className='bg-white'  >
                            <AlignJustify strokeWidth={2} size={48} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='w-full flex justify-start'>Menu</SheetTitle>
                    </SheetHeader>
                        <div className='flex flex-col mt-5 w-full justify-center'>
                            <div className='flex items-center'>
                                <House className='mr-2' size={18}/>
                                <Link href='#' className='font-bold'>Home</Link>
                            </div>
                            <div className='flex items-center mt-3'>
                                <Compass className='mr-2' size={18} />
                                <Link href='#' className='font-bold'>Sobre</Link>
                            </div>
                            <div className='flex items-center mt-3'>
                                <PencilLine className='mr-2' size={18} />
                                <Link href='#' className='font-bold'>Tutoriais</Link>
                            </div>

                        </div>
                    </SheetContent>


                </Sheet>

            </nav>
        </div>
    )
}