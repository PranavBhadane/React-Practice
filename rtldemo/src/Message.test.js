import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cleanup,} from '@testing-library/react';
import Message from './Message';
afterEach(()=>
{
    cleanup();
});
    describe('Message com test suite',()=>
    {
        test('handling click',()=>
        {
            render(<Message/>);
            const btnelem=screen.getByRole('button');
            userEvent.click(btnelem);
            const OE=screen.getByText('Hellos');
            expect(OE).toBeInTheDocument();
        })
});