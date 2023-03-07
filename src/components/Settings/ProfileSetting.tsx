import { useState } from "react";
import {
  Row,
  Image,
  Stack,
  Button,
  FormControl,
  Tooltip,
  OverlayTrigger,
  InputGroup,
} from "react-bootstrap";

const ProfileSetting = () => {
  const [walletData, setWalletData] = useState([
    "0x12f491fany9ll5rw2...cddc107116083ec49e5217",
    "0x12f491fany9ll5rw2...cddc107116083ec49e5217",
  ]);
  const [newWallet, setNewWallet] = useState("");

  const renderBannerTooltip = (props: any) => (
    <Tooltip id="button-tooltip" placement="top-start" {...props}>
      We recommend a 1500x1500px JPG, PNG, WEBP, or GIF (1MB max file size)
    </Tooltip>
  );

  const renderProfileTooltip = (props: any) => (
    <Tooltip id="button-tooltip" placement="top-start" {...props}>
      We recommend a 500x500px JPG, PNG, WEBP, or GIF (1MB max file size)
    </Tooltip>
  );

  const editWallet = (e: any, i: number) => {
    const wallet = walletData;
    wallet[i] = e.target.value;
    setWalletData([...wallet]);
  };
  const addWallet = () => {
    setWalletData([...walletData, newWallet]);
    setNewWallet("");
  };

  return (
    <>
      <h1 className="text-dark-light">Profile Setting</h1>
      <Row className="settings-body-profile">
        <Stack direction="horizontal" gap={5} className="settings-body-profile-preview">
          <div>
            <h2 className="text-dark-light">
              Profile Image
              <OverlayTrigger
                placement="top-start"
                delay={{ show: 250, hide: 400 }}
                overlay={renderProfileTooltip}
              >
                <img className="ps-2" src="/icons/info.png" />
              </OverlayTrigger>
            </h2>
            <Image
              src="/images/profile.png"
              className="settings-body-profile-image"
              width={200}
              height={200}
              roundedCircle
            />
          </div>
          <div>
            <h2 className="text-dark-light">
              Profile Banner
              <OverlayTrigger
                placement="top-start"
                delay={{ show: 250, hide: 400 }}
                overlay={renderBannerTooltip}
              >
                <img className="ps-2" src="/icons/info.png" />
              </OverlayTrigger>
            </h2>
            <Image
              src="/images/profile-banner.png"
              className="settings-body-profile-banner"
              height={200}
              rounded
            />
          </div>
        </Stack>
        <div className="mb-2">
          <h2 className="text-dark-light">Link NFT</h2>
          <Stack direction="horizontal" gap={2}>
            <FormControl className="input-dark-light" />
            <Button size="lg">Connect</Button>
          </Stack>
        </div>
        <div className="mb-2">
          <h2 className="text-dark-light">Username</h2>
          <FormControl className="input-dark-light" />
        </div>
        <div className="mb-2">
          <h2 className="text-dark-light">Personal Bio</h2>
          <FormControl className="input-dark-light" as="textarea" />
        </div>
        <div className="mb-2">
          <h2 className="text-dark-light">Email</h2>
          <FormControl className="input-dark-light" />
        </div>
        <div className="mb-2">
          <h2 className="text-dark-light">Linked Wallets</h2>
          {walletData.map((item, i) => {
            return (
              <Stack key={i} direction="horizontal" gap={2}>
                {" "}
                <InputGroup>
                  <InputGroup.Text className="prefix-icon">
                    <img src="/icons/Frame.png" className="px-1" />
                  </InputGroup.Text>
                  <FormControl
                    className="input-dark-light"
                    type="text"
                    value={item}
                    aria-label="With textarea"
                  />
                </InputGroup>
                <Button size="lg">Copy</Button>
              </Stack>
            );
          })}
          <Stack direction="horizontal" gap={2}>
            <FormControl
              className="input-dark-light"
              type="text"
              value={newWallet}
              onChange={(e) => setNewWallet(e.target.value)}
            />
            <Button size="lg" onClick={() => addWallet()}>
              +
            </Button>
          </Stack>
        </div>
        <div className="mb-2 mt-1">
          <h2 className="text-dark-light">Social Connections</h2>
          <Stack direction="horizontal" gap={2}>
            <InputGroup>
              <InputGroup.Text className="prefix-social-icon">
                <img src="/icons/twitter.png" className="px-1" />
              </InputGroup.Text>
              <FormControl
                className="input-dark-light"
                type="text"
                aria-label="With textarea"
                placeholder="Link Twitter"
              />
            </InputGroup>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <InputGroup>
              <InputGroup.Text className="prefix-social-icon">
                <img src="/icons/instagram.png" className="px-1" />
              </InputGroup.Text>
              <FormControl
                className="input-dark-light"
                type="text"
                aria-label="With textarea"
                placeholder="Link Instagram"
              />
            </InputGroup>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <InputGroup>
              <InputGroup.Text className="prefix-social-icon">
                <img src="/icons/discord.png" className="px-1" />
              </InputGroup.Text>
              <FormControl
                className="input-dark-light"
                type="text"
                aria-label="With textarea"
                placeholder="Link Discord"
              />
            </InputGroup>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <InputGroup>
              <InputGroup.Text className="prefix-social-icon">
                <img src="/icons/facebook.png" className="px-1" />
              </InputGroup.Text>
              <FormControl
                className="input-dark-light"
                type="text"
                aria-label="With textarea"
                placeholder="Link Facebook"
              />
            </InputGroup>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <InputGroup>
              <InputGroup.Text className="prefix-social-icon">
                <img src="/icons/tiktok.png" className="px-1" />
              </InputGroup.Text>
              <FormControl
                className="input-dark-light"
                type="text"
                aria-label="With textarea"
                placeholder="Link Tiktok"
              />
            </InputGroup>
          </Stack>
        </div>
        <div className="mb-2 ms-5 ps-5 mt-4 pt-4">
          <Button size="lg">Save</Button>
          <Button size="lg" className="mx-3" variant="light">
            Cancel
          </Button>
        </div>
      </Row>
    </>
  );
};

export { ProfileSetting };
