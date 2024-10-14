import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MembershipGrowthChart = () => {

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    const data = [
        { name: 'January', members: 272 },
        { name: 'February', members: 250 },
        { name: 'March', members: 310 },
        { name: 'April', members: 350 },
        { name: 'May', members: 410 },
        { name: 'June', members: 440 },
        { name: 'July', members: 603 },
        { name: 'August', members: 623 },
        { name: 'September', members: 686 },
        { name: 'October', members: 731 },
        { name: 'November', members: 794 },
        { name: currentMonth, members: 963 },
    ];

    return (
        <ResponsiveContainer width="100%" height={400} className={'font-poppins'}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="members" stroke="hotpink" fill="crimson" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MembershipGrowthChart;
