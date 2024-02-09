package com.catfamily.pojo;

public class User {
    private int id;
    private String name;
    private String password;
    private String email;
    private String phonenumber;
    private String nickname;
    private String gender;

    public User() {
    }

    public int getId() {
        return this.id;
    }

    public String getname() {
        return this.name;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPhonenumber() {
        return this.phonenumber;
    }

    public String getNickname() {
        return this.nickname;
    }

    public String getGender() {
        return this.gender;
    }

    public void setId(final int id) {
        this.id = id;
    }

    public void setname(final String name) {
        this.name = name;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public void setPhonenumber(final String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public void setNickname(final String nickname) {
        this.nickname = nickname;
    }

    public void setGender(final String gender) {
        this.gender = gender;
    }

    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof User)) {
            return false;
        } else {
            User other = (User) o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.getId() != other.getId()) {
                return false;
            } else {
                Object this$name = this.getname();
                Object other$name = other.getname();
                if (this$name == null) {
                    if (other$name != null) {
                        return false;
                    }
                } else if (!this$name.equals(other$name)) {
                    return false;
                }

                Object this$password = this.getPassword();
                Object other$password = other.getPassword();
                if (this$password == null) {
                    if (other$password != null) {
                        return false;
                    }
                } else if (!this$password.equals(other$password)) {
                    return false;
                }

                label71: {
                    Object this$email = this.getEmail();
                    Object other$email = other.getEmail();
                    if (this$email == null) {
                        if (other$email == null) {
                            break label71;
                        }
                    } else if (this$email.equals(other$email)) {
                        break label71;
                    }

                    return false;
                }

                label64: {
                    Object this$phonenumber = this.getPhonenumber();
                    Object other$phonenumber = other.getPhonenumber();
                    if (this$phonenumber == null) {
                        if (other$phonenumber == null) {
                            break label64;
                        }
                    } else if (this$phonenumber.equals(other$phonenumber)) {
                        break label64;
                    }

                    return false;
                }

                Object this$nickname = this.getNickname();
                Object other$nickname = other.getNickname();
                if (this$nickname == null) {
                    if (other$nickname != null) {
                        return false;
                    }
                } else if (!this$nickname.equals(other$nickname)) {
                    return false;
                }

                Object this$gender = this.getGender();
                Object other$gender = other.getGender();
                if (this$gender == null) {
                    if (other$gender != null) {
                        return false;
                    }
                } else if (!this$gender.equals(other$gender)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(final Object other) {
        return other instanceof User;
    }

    public String toString() {
        int var10000 = this.getId();
        return "User(id=" + var10000 + ", name=" + this.getname() + ", password=" + this.getPassword()
                + ", email=" + this.getEmail() + ", phonenumber=" + this.getPhonenumber() + ", nickname="
                + this.getNickname() + ", gender=" + this.getGender() + ")";
    }
}
