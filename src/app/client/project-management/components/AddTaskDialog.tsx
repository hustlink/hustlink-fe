import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DialogProps } from '@radix-ui/react-dialog';
import { ChevronDownIcon } from 'lucide-react';
import { useState, type FC } from 'react';

interface AddTaskDialogProps extends DialogProps {
    open: boolean;
    closeDialog: () => void;
}

const AddTaskDialog: FC<AddTaskDialogProps> = ({    
    open,
    closeDialog
}) => {
    const [openToDate, setOpenToDate] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)
    return (
        <Dialog open={open} onOpenChange={closeDialog}>
            <form>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                    Make changes to your task here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name"  />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="fromDate">From</Label>
                        <Input id="fromDate" name="fromDate" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="toDate">To</Label>
                        <Popover open={openToDate} onOpenChange={setOpenToDate}>
                            <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="toDate"
                                className="w-48 justify-between font-normal w-full border-solid border border-gray-900 rounded-md text-left p-2"
                            >
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0 bg-white" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date)
                                    setOpenToDate(false)
                                }}
                            />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="dependencies">Dependencies</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger id="dependencies" className='w-full border-solid border border-gray-900 rounded-md text-left p-2'>Task Dependencies</DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-white w-full'>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export default AddTaskDialog;
