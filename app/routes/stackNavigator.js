import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screen/auth/Login';
import SignUp from '../screen/auth/SignUp';
import ForgotPassword from '../screen/auth/ForgotPassword';
import Drawer from './DrawerNavigator';

import SettingProfileImage from '../screen/settings/settingProfileImage/SettingProfileImage';
import UploadProfileImage from '../screen/settings/settingProfileImage/UploadProfileImage';

import SettingPersonalDetail from '../screen/settings/SettingPersonalDetail';
import SettingMobileNumber from '../screen/settings/settingMobileNumber/SettingMobileNumber';
import VerifyMobileNumber from '../screen/settings/settingMobileNumber/VerifyMobileNumber';
import SettingEmailAddress from '../screen/settings/settingEmailAddress/SettingEmailAddress';
import SettingSocialNetwork from '../screen/settings/SettingSocialNetwork';
import SettingAddress from '../screen/settings/SettingAddress';
import SettingBankAccount from '../screen/settings/settingBankAccount/SettingBankAccount';
import SettingAddBankAccount from '../screen/settings/settingBankAccount/SettingAddBankAccount';
import SettingCard from '../screen/settings/SettingCard';
import SettingNotification from '../screen/settings/SettingNotification';

import SettingGetVerified from '../screen/settings/settingGetVerified/SettingGetVerified';
import ID_Document from '../screen/settings/settingGetVerified/ID_Document';
import ID_Selfie from '../screen/settings/settingGetVerified/ID_Selfie';
import Proof_of_address from '../screen/settings/settingGetVerified/Proof_of_address';
import DocumentUpload from '../screen/settings/settingGetVerified/DocumentUpload';

import UploadIdDocument from '../screen/settings/settingGetVerified/UploadIdDocument';
import UploadIdSelfie from '../screen/settings/settingGetVerified/UploadIdSelfie';
import UploadProofOfAddress from '../screen/settings/settingGetVerified/UploadProofOfAddress';

import SettingBitcoinAddress from '../screen/settings/settingBitcoinAddress/SettingBitcoinAddress';
import AddBitcoinAddress from '../screen/settings/settingBitcoinAddress/AddBitcoinAddress';

import SettingSecurity from '../screen/settings/settingSecurity/Security';
import Change_password from '../screen/settings/settingSecurity/Change_password';
import Two_factor from '../screen/settings/settingSecurity/Two_factor';
import Pin from '../screen/settings/settingSecurity/Pin';

import WithdrawBankAccount from '../screen/withdraw/WithdrawBankAccount';
import WithdrawBitcoinAddress from '../screen/withdraw/WithdrawBitcoinAddress';
import WithdrawAddBitcoinAddress from '../screen/withdraw/WithdrawAddBitcoinAddress';
import WithdrawAddBankAccount from '../screen/withdraw/WithdrawAddBankAccount';

import Home_Send from '../screen/home/Home_Send';
import Home_Send_To from '../screen/home/Home_Send_To';

import PromotionsAmount from '../screen/promotions/PromotionsAmount';
import SavePromotionsAmount from '../screen/promotions/SavePromotionsAmount';

export default Stack = StackNavigator({
    Login:{ screen: Login },
    SignUp:{ screen: SignUp },
    ForgotPassword:{ screen: ForgotPassword },
    Drawer:{ screen: Drawer },
    SettingProfileImage:{ screen: SettingProfileImage },
    SettingPersonalDetail:{ screen: SettingPersonalDetail },
    SettingMobileNumber:{ screen: SettingMobileNumber },
    SettingEmailAddress:{ screen: SettingEmailAddress },
    SettingSocialNetwork:{ screen: SettingSocialNetwork },
    SettingGetVerified:{ screen: SettingGetVerified },
    SettingAddress:{ screen: SettingAddress },
    SettingBankAccount:{ screen: SettingBankAccount },
    SettingBitcoinAddress:{ screen: SettingBitcoinAddress },
    SettingCard:{ screen: SettingCard },
    SettingSecurity:{ screen: SettingSecurity },
    SettingNotification:{ screen: SettingNotification },
    WithdrawBankAccount:{ screen: WithdrawBankAccount },
    WithdrawBitcoinAddress:{ screen: WithdrawBitcoinAddress },
    WithdrawAddBitcoinAddress:{ screen: WithdrawAddBitcoinAddress },
    WithdrawAddBankAccount:{ screen: WithdrawAddBankAccount },
    AddBitcoinAddress:{ screen: AddBitcoinAddress },
    UploadIdDocument:{ screen: UploadIdDocument },
    UploadIdSelfie:{ screen: UploadIdSelfie },
    UploadProofOfAddress:{ screen: UploadProofOfAddress },
    DocumentUpload:{ screen: DocumentUpload },
    UploadProfileImage:{ screen: UploadProfileImage },
    SettingAddBankAccount:{ screen: SettingAddBankAccount },
    VerifyMobileNumber:{ screen: VerifyMobileNumber },

    ID_Document:{ screen: ID_Document },
    ID_Selfie:{ screen: ID_Selfie },
    Proof_of_address:{ screen: Proof_of_address },

    Change_password:{ screen: Change_password },
    Two_factor:{ screen: Two_factor },
    Pin:{ screen: Pin },

    Home_Send:{ screen: Home_Send },
    Home_Send_To:{ screen: Home_Send_To },
    
    PromotionsAmount:{ screen: PromotionsAmount },
    SavePromotionsAmount:{ screen: SavePromotionsAmount },
});