import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchUsers, setUser } from "../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

const Password = () => {
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(false);
    const { currentUser, users } = useSelector(({ users }) => users);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        dispatch(fetchUsers())
        setRedirect(currentUser.id)
    }, [setRedirect, currentUser, dispatch]);

    const onSubmit = ({ password }, users) => {
        let user = users.filter((user) => user.password === password)
        dispatch(setUser(user[0]));
        reset()
    }

    return (
        <section className="form">
            {redirect && <Redirect to={`/profile/${redirect}`} />}
            <div className="form__wrapper login">
                <h3 className="form__title">Password</h3>
                <form className="form__form">
                    <label className="form__label">enter your password
                        <input type="password" {...register('password', {
                            validate: (value) => users.filter((user) => user.password === value)
                        })} className={errors.password ? "form__input error" : "form__input"}></input>
                        {errors.password ? <p className="form__error">Invalid password</p> : <p className="form__error"></p>}
                    </label>
                    <div className="form__btnWrapper login">
                        <button type="submit" onClick={handleSubmit((password) => onSubmit(password, users))} className="form__btn login">submit</button>
                        <div className="form__linkWrapper">
                            <Link to="/sign-up"><button className="form__link">sign up</button></Link>
                            <Link to="/select-user"><button className="form__link">select user</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Password