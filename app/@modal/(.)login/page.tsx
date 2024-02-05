import Modal from '@/app/components/Modal'

// Перехватывающий роут
const LoginPage = () => {
  return (
    <Modal>
      <div className=" flex items-center justify-center h-screen">
        <div className=" max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className=" text-2xl font-bold mb-4 ">Login soft navigation</h1>
          <form action="">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className=" flex items-center justify-between">
              <button
                type="button"
                className=" bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Login
              </button>
              <a
                href="#"
                className=" inline-block align-baseline font-bold text-sm text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
export default LoginPage
