import FeedContextProvider from './FeedContext/Provider';

const {
    default: ProfileContextProvider,
} = require('./ProfileContext/Provider');
const { default: ThemeContextProvider } = require('./ThemeContext/Provider');
const { default: UserContextProvider } = require('./UserContext/Provider');

function ContextProvider({ children, setLoad }) {
    return (
        <UserContextProvider setLoad={setLoad}>
            <ProfileContextProvider>
                <FeedContextProvider>
                    <ThemeContextProvider>{children}</ThemeContextProvider>
                </FeedContextProvider>
            </ProfileContextProvider>
        </UserContextProvider>
    );
}

export default ContextProvider;
