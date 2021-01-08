import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { ProductScreen } from './screens/ProductScreen';
import { HomeScreen } from './screens/HomeScreen'
import { CartScreen } from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import { SigninScreen } from './screens/SignInScreen';
import { signout } from './actions/userActions'
import { RegisterScreen } from './screens/RegisterScreen';
import { ShippingAddressScreen } from './screens/ShippingAddressScreen';
import { PaymentMethodScreen } from './screens/PaymentMethodScreen';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen';
import { OrderScreen } from './screens/OrderScreen';
import { OrderHistoryScreen } from './screens/OrderHistoryScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminRoute } from './components/AdminRoute';
import { ProductListScreen } from './screens/ProductListScreen';
import { ProductEditScreen } from './screens/ProductEditScreen';
import { OrderListScreen } from './screens/OrderListScreen';
import { UserListScreen } from './screens/UserListScreen';
import { UserEditScreen } from './screens/UserEditScreen';
import { SearchBox } from './components/SearchBox';
import { SearchScreen } from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import { LoadingBox } from './components/LoadingBox';
import { MessageBox } from './components/MessageBox';
import { MapScreen } from './screens/MapScreen';
import { useDarkMode }  from './hooks/useDarkMode'

function App() {

    const [darkMode, setDarkMode] = useDarkMode(true)

    const cart = useSelector(state => state.cart);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const { cartItems } = cart;

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
    };

    const toggleDarkMode = (e) => {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
      };

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;

    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

  return (
    <BrowserRouter>
    <div>
      <div className="container">
        <div className="dark-mode__toggle">
            <div
                onClick={toggleDarkMode}
                className={darkMode ? "toggle toggled" : "toggle"}
            />
        </div>
      <header className="row">
        <div className="logo-menu">
          <button
                type="button"
                className="open-sidebar"
                onClick={() => setSidebarIsOpen(true)}
              >
                <i className="fa fa-bars"></i>
          </button>
          <Link className="brand" to="/">W.O.W_co</Link>
        </div>
        <div className="search-bar">
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
        <div className="links">
          <Link to="/cart">Cart
          { cartItems.length > 0 && (
            <span className="badge"> { cartItems.length } </span>
          )}
          </Link>
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to='/profile'>User Profile</Link>
                  </li>
                  <li>
                    <Link to='/orderhistory'>Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
              {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      </div>
      <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
      <main>
        <Route path='/cart/:id?' component={ CartScreen } />
        <Route path="/product/:id" component={ ProductScreen } exact />
        <Route path='/product/:id/edit' component={ ProductEditScreen } exact />
        <Route path='/signin' component={ SigninScreen } />
        <Route path='/register' component={ RegisterScreen } />
        <Route path='/shipping' component={ ShippingAddressScreen } />
        <Route path='/payment' component={ PaymentMethodScreen } />
        <Route path='/placeorder' component={ PlaceOrderScreen } />
        <Route path='/order/:id' component = { OrderScreen } />
        <Route path='/orderhistory' component={ OrderHistoryScreen } />
        <Route path="/search/name/:name?" component={SearchScreen} exact />
        <Route path="/search/category/:category" component={SearchScreen} exact />
        <Route path="/search/category/:category/name/:name" component={SearchScreen} exact />
        <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order" component={SearchScreen} exact />
        <PrivateRoute path='/profile' component={ ProfileScreen } />
        <PrivateRoute path="/map" component={MapScreen} />
        <AdminRoute path='/productlist' component={ ProductListScreen } />
        <AdminRoute path='/orderlist' component={ OrderListScreen } />
        <AdminRoute path="/userlist" component={ UserListScreen } />
        <AdminRoute path="/user/:id/edit" component={ UserEditScreen } />
        <Route path="/" component={ HomeScreen } exact />
      </main>
      {/* <footer className="row center">All rights reserved</footer> */}
    </div>
    </BrowserRouter>
  );
  
}

export default App;
