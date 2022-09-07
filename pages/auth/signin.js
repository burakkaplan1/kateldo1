import { getProviders, signIn as SignInToProvider } from "next-auth/react";
import Header from "../../Components/Header";

// Web page
function signin({ providers }) {
  console.log({ providers });
  return (
    <>
      <Header />
      <div className="my-20 items-center flex flex-col ">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
          Kateldo
        </h1>

        <div className="my-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 text-white p-3 rounded-md py-2"
                onClick={() =>
                  SignInToProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// SERVER
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
