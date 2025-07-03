import React from 'react';
import { Box, Typography, Link, Stack, Divider } from '@mui/material';
import iconFacebook from '../../assets/images/iconFacebook.svg';
import iconInkedin from '../../assets/images/iconInkedin.svg';
import iconTwitter from '../../assets/images/iconTwitter.svg';
import iconGroup from '../../assets/images/iconGroup.svg';
import botLogo2 from '../../assets/images/botLogo2.svg';


const BattleGroundFooter = () => {
    return (
        <Box sx={{ backgroundColor: '#373B47', color: '#fff', pt: 6, pb: 4, px: { xs: 2, md: 8 } }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems='center'
                spacing={4}
            >
                <img src={botLogo2} alt="BOT Logo" style={{ width: '120px', marginBottom: '12px' }} />

                <Stack direction="row" spacing={4}>
                    <Link href="#" underline="hover" sx={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>
                        Programs
                    </Link>
                    <Link href="#" underline="hover" sx={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>
                        Features
                    </Link>
                    <Link href="#" underline="hover" sx={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>
                        Contact
                    </Link>
                </Stack>
            </Stack>

            {/* Divider */}
            <Divider sx={{ my: 2.5, borderColor: 'rgba(255,255,255,0.2)' }} />

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack direction="row" spacing={1}>
                    <img src={iconFacebook} alt="Facebook" width={25} />
                    <img src={iconInkedin} alt="LinkedIn" width={25} />
                    <img src={iconTwitter} alt="Twitter" width={25} />
                    <img src={iconGroup} alt="Medium" width={25} />
                </Stack>

                <Typography sx={{ fontSize: '12px', color: '#fff' }}>
                    © 2022 BOT. All rights reserved
                </Typography>
                <Link href="#" underline="hover" sx={{ fontSize: '12px', color: '#fff' }}>
                    Privacy policy
                </Link>
            </Stack>

        </Box>
    );
};

export default BattleGroundFooter;
